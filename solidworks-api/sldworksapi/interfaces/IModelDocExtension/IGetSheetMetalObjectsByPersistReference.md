---
type: method
interface: IModelDocExtension
member: IGetSheetMetalObjectsByPersistReference
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of persistent reference IDs
  -
    name: PersistId
    type: System.Byte
    description: Persistent reference IDs returned by IModelDocExtension::GetFlattenSheetMetalPersistReference or IModelDocExtension::IGetFlattenSheetMetalPersistReference
  -
    name: ErrorCode
    type: System.Int32
    description: Error as defined by swPersistReferencedObjectStates_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetObjectByPersistReference3
  - IModelDocExtension.GetPersistReference3
  - IModelDocExtension.GetPersistReferenceCount3
  - IModelDocExtension.GetSheetMetalObjectsByPersistReference
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
  - igetsheetmetalobjectsbypersistreference
  - imodeldocextension
  - model
  - doc
  - extension
  - objects
  - persist
  - count
  - int32
  - id
  - byte
  - error
  - code
  - object
---

# IModelDocExtension.IGetSheetMetalObjectsByPersistReference

Gets the object, or objects, in a folded sheet metal part that correspond to the byte array of persistent reference IDs of an entity in a flattened sheet metal part.

## Signature

```csharp
System.Object IGetSheetMetalObjectsByPersistReference( 
   System.Int32
Count
,
   ref System.byte
PersistId
,
   out System.Int32
ErrorCode
)
```
## Parameters

- `Count` (System.Int32): Number of persistent reference IDs
- `PersistId` (System.Byte): Persistent reference IDs returned by IModelDocExtension::GetFlattenSheetMetalPersistReference or IModelDocExtension::IGetFlattenSheetMetalPersistReference
- `ErrorCode` (System.Int32): Error as defined by swPersistReferencedObjectStates_e

## Return Value

in-process, unmanaged C++: Pointer to an array of objects in a folded sheet metal part that correspond to the byte array of persistent reference IDs of an entity in a flattened sheet metal part VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

See
Persistent Reference IDs
for more information.

## See Also

- `IModelDocExtension.GetObjectByPersistReference3`
- `IModelDocExtension.GetPersistReference3`
- `IModelDocExtension.GetPersistReferenceCount3`
- `IModelDocExtension.GetSheetMetalObjectsByPersistReference`
- `IModelDocExtension.IGetObjectByPersistReference3`
- `IModelDocExtension.IGetPersistReference3`