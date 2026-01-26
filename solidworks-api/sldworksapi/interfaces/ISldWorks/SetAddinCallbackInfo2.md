---
type: method
interface: ISldWorks
member: SetAddinCallbackInfo2
returns: System.Boolean
parameters:
  -
    name: ModuleHandle
    type: System.Int64
    description: Instance handle of the add-in
  -
    name: AddinCallbacks
    type: System.Object
    description: Object that includes the add-in callback methods
  -
    name: Cookie
    type: System.Int32
    description: Add-in ID; this is the same cookie you specify in ISwAddin::ConnectToSW
docset: sldworksapi
deprecated: false
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
  - callback
  - setaddincallbackinfo2
  - isldworks
  - sld
  - works
  - addin
  - info2
  - module
  - handle
  - int64
  - callbacks
  - object
  - cookie
  - int32
  - boolean
  - create
  - flyouts
  - commandmanager
  - vb
  - net
---

# ISldWorks.SetAddinCallbackInfo2

Sets add-in callback commands.

## Signature

```csharp
System.Boolean SetAddinCallbackInfo2( 
   System.Int64
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

- `ModuleHandle` (System.Int64): Instance handle of the add-in
- `AddinCallbacks` (System.Object): Object that includes the add-in callback methods
- `Cookie` (System.Int32): Add-in ID; this is the same cookie you specify in ISwAddin::ConnectToSW

## Return Value

True if the add-in callback commands are set, false if not

## Examples

- Create Flyouts in the CommandManager (C#) (Create_Flyouts_in_the_CommandManager_Example_CSharp.htm)
- Create Flyouts in the CommandManager (VB.NET) (Create_Flyouts_in_the_CommandManager_Example_VBNET.htm)

## See Also

- `ISldWorks.AddCallback`
- `ISldWorks.CallBack`
- `ISldWorks.RemoveCallback`