---
type: method
interface: ISldWorks
member: ShowUserNotification
returns: System.Int32
parameters:
  -
    name: Definition
    type: System.Object
    description: IUserNotificationDefinition
  -
    name: Handler
    type: System.Object
    description: IUserNotificationHandler
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - showusernotification
  - isldworks
  - sld
  - works
  - show
  - user
  - notification
  - definition
  - object
  - handler
  - int32
  - iusernotificationhandler
---

# ISldWorks.ShowUserNotification

Shows the specified user notification for a SOLIDWORKS add-in.

## Signature

```csharp
System.Int32 ShowUserNotification( 
   System.Object
Definition
,
   System.Object
Handler
)
```
## Parameters

- `Definition` (System.Object): IUserNotificationDefinition
- `Handler` (System.Object): IUserNotificationHandler

## Return Value

Result code as defined by swShowNotificationResult_e

## Examples

- IUserNotificationHandler (ms-its:swpublishedapi.chm::/SolidWorks.Interop.swpublished~SolidWorks.Interop.swpublished.IUserNotificationHandler.html)