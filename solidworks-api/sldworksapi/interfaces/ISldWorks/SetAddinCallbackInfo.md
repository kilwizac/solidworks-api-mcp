---
type: method
interface: ISldWorks
member: SetAddinCallbackInfo
returns: System.Boolean
parameters:
  -
    name: ModuleHandle
    type: System.Int32
    description: Instance handle of the add-in
  -
    name: AddinCallbacks
    type: System.Object
    description: Object that includes the add-in callback methods
  -
    name: Cookie
    type: System.Int32
    description: Add-in ID; this is the same Cookie you specified in ISwAddin::ConnectToSW
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.AddCallback
  - ISldWorks.CallBack
  - ISldWorks.RemoveCallback
keywords:
  - setaddincallbackinfo
  - isldworks
  - sld
  - works
  - addin
  - callback
  - info
  - module
  - handle
  - int32
  - callbacks
  - object
  - cookie
  - boolean
---

# ISldWorks.SetAddinCallbackInfo

Obsolete. Superseded by ISldWorks::SetAddinCallbackInfo2.

## Signature

```csharp
System.Boolean SetAddinCallbackInfo( 
   System.Int32
ModuleHandle
,
   System.Object
AddinCallbacks
,
   System.Int32
Cookie
)
```
## Parameters

- `ModuleHandle` (System.Int32): Instance handle of the add-in
- `AddinCallbacks` (System.Object): Object that includes the add-in callback methods
- `Cookie` (System.Int32): Add-in ID; this is the same Cookie you specified in ISwAddin::ConnectToSW

## Return Value

True if the add-in callback commands are set, false if if not

## See Also

- `ISldWorks.AddCallback`
- `ISldWorks.CallBack`
- `ISldWorks.RemoveCallback`