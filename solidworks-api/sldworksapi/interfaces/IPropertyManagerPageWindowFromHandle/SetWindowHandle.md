---
type: method
interface: IPropertyManagerPageWindowFromHandle
member: SetWindowHandle
returns: System.Boolean
parameters:
  -
    name: WindowHandle
    type: System.Int32
    description: Handle of the .NET control
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - setwindowhandle
  - ipropertymanagerpagewindowfromhandle
  - manager
  - page
  - window
  - handle
  - int32
  - boolean
---

# IPropertyManagerPageWindowFromHandle.SetWindowHandle

Sets the handle of this .NET control.

## Signature

```csharp
System.Boolean SetWindowHandle( 
   System.Int32
WindowHandle
)
```
## Parameters

- `WindowHandle` (System.Int32): Handle of the .NET control

## Return Value

True if handle is set, false if not

## Remarks

If your application must be x64 compatible, then use
IPropertyManagerPageWindowFromHandle::SetWindowHandlex64
.
You must call this method to initialize the .NET control handle whenever you call
IPropertyManagerPage2::Show2
, because .NET control handles are destroyed with their forms when the PropertyManager page closes.