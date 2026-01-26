---
type: method
interface: ISldWorks
member: PostMessageToApplication
returns: void
parameters:
  -
    name: Cookie
    type: System.Int32
    description: Cookie specified in ISwAddin::ConnectToSW
  -
    name: UserData
    type: System.Int32
    description: Additional message-specific information defined by the application
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.AddCallback
keywords:
  - postmessagetoapplication
  - isldworks
  - sld
  - works
  - post
  - message
  - application
  - cookie
  - int32
  - user
  - data
  - void
---

# ISldWorks.PostMessageToApplication

Posts a message to the application that invoked this method.

## Signature

```csharp
void PostMessageToApplication( 
   System.Int32
Cookie
,
   System.Int32
UserData
)
```
## Parameters

- `Cookie` (System.Int32): Cookie specified in ISwAddin::ConnectToSW
- `UserData` (System.Int32): Additional message-specific information defined by the application

## Return Value

Unknown.

## Remarks

If your application must be x64 compatible, then use
ISldWorks::PostMessageToApplicationx64
.

## See Also

- `ISldWorks.AddCallback`