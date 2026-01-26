---
type: method
interface: IModelDocExtension
member: GetOLEObjectCount
returns: System.Int32
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
  - IModelDocExtension.GetOLEObjects
  - IModelDocExtension.ICreateOLEObject
  - IModelDocExtension.IGetOLEObjects
  - IModelDocExtension.InsertObjectFromFile
keywords:
  - ole
  - objects
  - getoleobjectcount
  - imodeldocextension
  - model
  - doc
  - extension
  - object
  - count
  - options
  - int32
  - determine
  - are
  - linked
  - embedded
  - vba
---

# IModelDocExtension.GetOLEObjectCount

Gets the number of OLE objects.

## Signature

```csharp
System.Int32 GetOLEObjectCount( 
   System.Int32
Options
)
```
## Parameters

- `Options` (System.Int32): Options as defined in swOleObjectOptions_e

## Return Value

Number of OLE objects

## Remarks

Call this method before calling
IModelDocExtension::IGetOLEObjects
.

## Examples

- Determine if OLE Objects Are Linked or Embedded (VBA) (Determine_if_OLE_Objects_are_Linked_or_Embedded_Example_VB.htm)

## See Also

- `IModelDocExtension.CreateOLEObject`
- `IModelDocExtension.GetOLEObjects`
- `IModelDocExtension.ICreateOLEObject`
- `IModelDocExtension.IGetOLEObjects`
- `IModelDocExtension.InsertObjectFromFile`