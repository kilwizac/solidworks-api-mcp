---
type: method
interface: IModelDocExtension
member: GetOLEObjects
returns: System.Object
parameters:
  -
    name: Options
    type: System.Int32
    description: Options as defined in swOleObjectOptions_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.CreateOLEObject
  - IModelDocExtension.GetOLEObjectCount
  - IModelDocExtension.ICreateOLEObject
  - IModelDocExtension.IGetOLEObjects
  - IModelDocExtension.InsertObjectFromFile
keywords:
  - objects
  - ole
  - getoleobjects
  - imodeldocextension
  - model
  - doc
  - extension
  - options
  - int32
  - object
  - determine
  - are
  - linked
  - embedded
  - vba
---

# IModelDocExtension.GetOLEObjects

Get the OLE objects.

## Signature

```csharp
System.Object GetOLEObjects( 
   System.Int32
Options
)
```
## Parameters

- `Options` (System.Int32): Options as defined in swOleObjectOptions_e

## Return Value

Array of the OLE objects

## Examples

- Determine if OLE Objects Are Linked or Embedded (VBA) (Determine_if_OLE_Objects_are_Linked_or_Embedded_Example_VB.htm)

## See Also

- `IModelDocExtension.CreateOLEObject`
- `IModelDocExtension.GetOLEObjectCount`
- `IModelDocExtension.ICreateOLEObject`
- `IModelDocExtension.IGetOLEObjects`
- `IModelDocExtension.InsertObjectFromFile`