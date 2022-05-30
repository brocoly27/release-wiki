"# release-wiki" 


Install-WindowsFeature Web-Server;
Install-WindowsFeature Web-App-Dev;
Install-WindowsFeature Web-Net-Ext;
Install-WindowsFeature Web-Net-Ext45;
Install-WindowsFeature Web-AppInit;
Install-WindowsFeature Web-ASP;
Install-WindowsFeature Web-Asp-Net;
Install-WindowsFeature Web-Asp-Net45;
Install-WindowsFeature Web-ISAPI-Ext;
Install-WindowsFeature Web-ISAPI-Filter;
Install-WindowsFeature Web-Includes;
Install-WindowsFeature Web-WebSockets;

Copy-Item -Path 'C:\Users\Administrator\Desktop\roadkill' -Destination 'C:\inetpub\' -Recurse -Force;

$accessRule = New-Object System.Security.AccessControl.FileSystemAccessRule('IIS_IUSRS', 'FullControl', 'ContainerInherit,ObjectInherit', 'None', 'Allow');
$acl = Get-ACL 'C:\inetpub\roadkill';
$acl.AddAccessRule($accessRule)
Set-ACL -Path 'C:\inetpub\roadkill' -ACLObject $acl

#Stop-Website -name 'Default Web Site';
#Remove-Website -Name 'Default Web Site'
Stop-WebAppPool -Name 'RoadkillAppPool';
Remove-WebAppPool -Name 'RoadkillAppPool';
Stop-Website -Name 'RoadKillWebSite';
Remove-Website -Name 'RoadKillWebSite';

New-WebAppPool -Name 'RoadkillAppPool';
Start-WebAppPool -Name 'RoadkillAppPool';

New-Website -Name 'RoadKillWebSite' -PhysicalPath 'C:\inetpub\roadkill' -ApplicationPool 'RoadkillAppPool' -Port 8090;

