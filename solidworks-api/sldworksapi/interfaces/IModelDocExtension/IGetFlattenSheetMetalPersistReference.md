---
type: method
interface: IModelDocExtension
member: IGetFlattenSheetMetalPersistReference
returns: System.Byte
parameters:
  -
    name: DispObj
    type: System.Object
    description: Entity (a face, edge, or vertex) in the flattened sheet metal part whose persistent reference IDs you want
  -
    name: Count
    type: System.Int32
    description: Number of persistent reference IDs
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetFlattenSheetMetalPersistReference
  - IModelDocExtension.GetObjectByPersistReference3
  - IModelDocExtension.GetPersistReference3
  - IModelDocExtension.GetPersistReferenceCount
  - IModelDocExtension.IGetObjectByPersistReference3
  - IModelDocExtension.IGetPersistReference3
keywords:
  - persistent
  - reference
  - ids
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - igetflattensheetmetalpersistreference
  - imodeldocextension
  - model
  - doc
  - extension
  - flatten
  - persist
  - disp
  - obj
  - object
  - count
  - int32
  - byte
---

# IModelDocExtension.IGetFlattenSheetMetalPersistReference

Gets a byte array of persistent reference IDs for the specified entity (a face, edge, or vertex) in a flattened sheet metal part.

## Signature

```csharp
System.byte IGetFlattenSheetMetalPersistReference( 
   System.Object
DispObj
,
   System.Int32
Count
)
```
## Parameters

- `DispObj` (System.Object): Entity (a face, edge, or vertex) in the flattened sheet metal part whose persistent reference IDs you want
- `Count` (System.Int32): Number of persistent reference IDs

## Return Value

in-process, unmanaged C++: Pointer to a byte array of persistent reference IDs VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The sheet metal part must be in the flattened state when this method is called. You can pass the byte array of persistent reference IDs to
IModelDocExtension::GetSheetMetalObjectsByPersistReference
or
IModelDocExtension::IGetSheetMetalObjectsByPersistReference
, which gets the objects that correspond to the persistent reference IDs in the folded configuration of the sheet metal part.
See
Persistent Reference IDs
for more information.

## See Also

- `IModelDocExtension.GetFlattenSheetMetalPersistReference`
- `IModelDocExtension.GetObjectByPersistReference3`
- `IModelDocExtension.GetPersistReference3`
- `IModelDocExtension.GetPersistReferenceCount`
- `IModelDocExtension.IGetObjectByPersistReference3`
- `IModelDocExtension.IGetPersistReference3`