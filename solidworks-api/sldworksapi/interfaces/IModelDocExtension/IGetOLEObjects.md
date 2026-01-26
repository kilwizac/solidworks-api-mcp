---
type: method
interface: IModelDocExtension
member: IGetOLEObjects
returns: void
parameters:
  -
    name: Options
    type: System.Int32
    description: Options as defined in swOleObjectOptions_e
  -
    name: OleObjectCount
    type: System.Int32
    description: Number of OLE objects
  -
    name: LpOleObjects
    type: SwOLEObject
    description: in-process, unmanaged C++: Pointer to an array of the OLE objects VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetOLEObjects
keywords:
  - ole
  - objects
  - igetoleobjects
  - imodeldocextension
  - model
  - doc
  - extension
  - options
  - int32
  - object
  - count
  - lp
  - sw
  - void
---

# IModelDocExtension.IGetOLEObjects

Get the OLE objects.

## Signature

```csharp
void IGetOLEObjects( 
   System.Int32
Options
,
   System.Int32
OleObjectCount
,
   out SwOLEObject
LpOleObjects
)
```
## Parameters

- `Options` (System.Int32): Options as defined in swOleObjectOptions_e
- `OleObjectCount` (System.Int32): Number of OLE objects
- `LpOleObjects` (SwOLEObject): in-process, unmanaged C++: Pointer to an array of the OLE objects VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Before calling this method, call
IModelDocExtension::GetOLEObjectCount
to determine the size of the output array.

## See Also

- `IModelDocExtension.GetOLEObjects`