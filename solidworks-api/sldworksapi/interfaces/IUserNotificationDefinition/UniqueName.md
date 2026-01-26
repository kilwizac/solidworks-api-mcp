---
type: property
interface: IUserNotificationDefinition
member: UniqueName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - uniquename
  - iusernotificationdefinition
  - user
  - notification
  - definition
  - unique
  - name
  - string
readonly: true
---

# IUserNotificationDefinition.UniqueName

Gets the ID of this user notification.

## Signature

```csharp
System.String UniqueName {get;}
```
## Parameters

None.

## Return Value

Unique ID of this user notification

## Remarks

It is the add-in's responsibility to ensure that the ID is unique by using, for example, a combination of add-in module name and unique notification identifier:
"MyAddInName+ID_MYNOTIFICATION1"