---
type: method
interface: ISldWorks
member: DefineUserNotification
returns: System.Object
parameters:
  -
    name: UniqueName
    type: System.String
    description: Unique ID of this user notification
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - defineusernotification
  - isldworks
  - sld
  - works
  - define
  - user
  - notification
  - unique
  - name
  - string
  - object
  - iusernotificationhandler
---

# ISldWorks.DefineUserNotification

Called by a SOLIDWORKS add-in, creates a user notification definition object.

## Signature

```csharp
System.Object DefineUserNotification( 
   System.String
UniqueName
)
```
## Parameters

- `UniqueName` (System.String): Unique ID of this user notification

## Return Value

IUserNotificationDefinition

## Remarks

It is the add-in's responsibility to ensure that the ID is unique by using, for example, a combination of add-in module name and unique notification identifier:
"MyAddInName+ID_MYNOTIFICATION1"

## Examples

- IUserNotificationHandler (ms-its:swpublishedapi.chm::/SolidWorks.Interop.swpublished~SolidWorks.Interop.swpublished.IUserNotificationHandler.html)