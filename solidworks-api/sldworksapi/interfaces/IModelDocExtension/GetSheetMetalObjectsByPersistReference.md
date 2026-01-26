---
type: method
interface: IModelDocExtension
member: GetSheetMetalObjectsByPersistReference
returns: System.Object
parameters:
  -
    name: PersistId
    type: System.Object
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
  - IModelDocExtension.IGetObjectByPersistReference3
  - IModelDocExtension.IGetPersistReference3
  - IModelDocExtension.IGetSheetMetalObjectsByPersistReference
keywords:
  - persistent
  - reference
  - ids
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - getsheetmetalobjectsbypersistreference
  - imodeldocextension
  - model
  - doc
  - extension
  - objects
  - persist
  - id
  - object
  - error
  - code
  - int32
  - part
  - vb
  - net
  - vba
---

# IModelDocExtension.GetSheetMetalObjectsByPersistReference

Gets the objects in a folded sheet metal part that correspond to the byte array of persistent reference IDs of an entity in a flattened sheet metal part.

## Signature

```csharp
System.Object GetSheetMetalObjectsByPersistReference( 
   System.Object
PersistId
,
   out System.Int32
ErrorCode
)
```
## Parameters

- `PersistId` (System.Object): Persistent reference IDs returned by IModelDocExtension::GetFlattenSheetMetalPersistReference or IModelDocExtension::IGetFlattenSheetMetalPersistReference
- `ErrorCode` (System.Int32): Error as defined by swPersistReferencedObjectStates_e

## Return Value

Objects in a folded sheet metal part that correspond to the byte array of persistent reference IDs of an entity in a flattened sheet metal part

## Remarks

See
Persistent Reference IDs
for more information.

## Examples

- Set and Get Sheet Metal Part's Persistent Reference IDs (C#) (Set_and_Get_Sheet_Metal_Part's_Persistent_Reference_IDs_Example_CSharp.htm)
- Set and Get Sheet Metal Part's Persistent Reference IDS (VB.NET) (Set_and_Get_Sheet_Metal_Part's_Persistent_Reference_IDs_Example_VBNET.htm)
- Set and Get Sheet Metal Part's Persistent Reference IDs (VBA) (Set_and_Get_Sheet_Metal_Part's_Persistent_Reference_IDs_Example_VB.htm)

## See Also

- `IModelDocExtension.GetObjectByPersistReference3`
- `IModelDocExtension.GetPersistReference3`
- `IModelDocExtension.GetPersistReferenceCount3`
- `IModelDocExtension.IGetObjectByPersistReference3`
- `IModelDocExtension.IGetPersistReference3`
- `IModelDocExtension.IGetSheetMetalObjectsByPersistReference`