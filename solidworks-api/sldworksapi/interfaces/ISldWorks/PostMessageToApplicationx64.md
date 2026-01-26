---
type: method
interface: ISldWorks
member: PostMessageToApplicationx64
returns: void
parameters:
  -
    name: Cookie
    type: System.Int32
    description: Cookie specified in ISwAddin::ConnectToSW
  -
    name: UserData
    type: System.Int64
    description: Additional message-specific information defined by the application
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.PostMessageToApplication
keywords:
  - postmessagetoapplicationx64
  - isldworks
  - sld
  - works
  - post
  - message
  - applicationx64
  - cookie
  - int32
  - user
  - data
  - int64
  - void
---

# ISldWorks.PostMessageToApplicationx64

Posts a message to the application that invoked this method in 64-bit applications.

## Signature

```csharp
void PostMessageToApplicationx64( 
   System.Int32
Cookie
,
   System.Int64
UserData
)
```
## Parameters

- `Cookie` (System.Int32): Cookie specified in ISwAddin::ConnectToSW
- `UserData` (System.Int64): Additional message-specific information defined by the application

## Return Value

Unknown.

## Remarks

This method is only available through early binding and with 64-bit versions of the SOLIDWORKS Design software.

## See Also

- `ISldWorks.PostMessageToApplication`