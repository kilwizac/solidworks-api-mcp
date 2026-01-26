---
type: method
interface: IModelDocExtension
member: GetFlattenSheetMetalPersistReference
returns: System.Object
parameters:
  -
    name: DispObj
    type: System.Object
    description: Entity (a face, edge, or vertex) in the flattened sheet metal part whose persistent reference IDs you want
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
keywords:
  - persistent
  - reference
  - ids
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - getflattensheetmetalpersistreference
  - imodeldocextension
  - model
  - doc
  - extension
  - flatten
  - persist
  - disp
  - obj
  - object
  - part
  - vb
  - net
  - vba
---

# IModelDocExtension.GetFlattenSheetMetalPersistReference

Gets a byte array of persistent reference IDs for the specified entity (a face, edge, or vertex) in a flattened sheet metal part.

## Signature

```csharp
System.Object GetFlattenSheetMetalPersistReference( 
   System.Object
DispObj
)
```
## Parameters

- `DispObj` (System.Object): Entity (a face, edge, or vertex) in the flattened sheet metal part whose persistent reference IDs you want

## Return Value

Byte array of persistent reference IDs

## Remarks

The sheet metal part must be in the flattened state when this method is called. You can then pass the byte array of persistent reference IDs to
IModelDocExtension::GetSheetMetalObjectsByPersistReference
or
IModelDocExtension::IGetSheetMetalObjectsByPersistReference
, which gets the objects that correspond to the persistent reference IDs in the folded configuration of the sheet metal part.
See
Persistent Reference IDs
for more information.

## Examples

- Set and Get Sheet Metal Part's Persistent Reference IDs (C#) (Set_and_Get_Sheet_Metal_Part's_Persistent_Reference_IDs_Example_CSharp.htm)
- Set and Get Sheet Metal Part's Persistent Reference IDs (VB.NET) (Set_and_Get_Sheet_Metal_Part's_Persistent_Reference_IDs_Example_VBNET.htm)
- Set and Get Sheet Metal Part's Persistent Reference IDs (VBA) (Set_and_Get_Sheet_Metal_Part's_Persistent_Reference_IDs_Example_VB.htm)

## See Also

- `IModelDocExtension.GetObjectByPersistReference3`
- `IModelDocExtension.GetPersistReference3`
- `IModelDocExtension.GetPersistReferenceCount3`
- `IModelDocExtension.IGetObjectByPersistReference3`
- `IModelDocExtension.IGetPersistReference3`