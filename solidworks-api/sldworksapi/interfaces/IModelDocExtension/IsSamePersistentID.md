---
type: method
interface: IModelDocExtension
member: IsSamePersistentID
returns: System.Int32
parameters:
  -
    name: PersistentID1
    type: System.Object
    description: Object
  -
    name: PersistentID2
    type: System.Object
    description: Object
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
  - ISldWorks.IsSame
keywords:
  - persistent
  - reference
  - ids
  - objects
  - id
  - issamepersistentid
  - imodeldocextension
  - model
  - doc
  - extension
  - same
  - id1
  - object
  - id2
  - int32
  - compare
  - selected
  - their
  - vb
  - net
  - vba
---

# IModelDocExtension.IsSamePersistentID

Gets whether the two specified objects have the same persistent reference IDs.

## Signature

```csharp
System.Int32 IsSamePersistentID( 
   System.Object
PersistentID1
,
   System.Object
PersistentID2
)
```
## Parameters

- `PersistentID1` (System.Object): Object
- `PersistentID2` (System.Object): Object

## Return Value

Object equality as defined by swObjectEquality

## Remarks

Use this method when your application is passed two entities that your application did not select, and your application needs to know if they are the same entity.

## Examples

- Compare Selected Objects and Their Persistent Reference IDs (VB.NET) (Compare_Selected_Objects_and_Their_Persistent_Reference_IDs_Example_VBNET.htm)
- Compare Selected Objects and Their Persistent Reference IDs (VBA) (Compare_Selected_Objects_and_Their_Persistent_Reference_IDs_Example_VB.htm)
- Compare Selected Objects and Their Persistent Reference IDs (C#) (Compare_Selected_Objects_and_Their_Persistent_Reference_IDs_Example_CSharp.htm)

## See Also

- `IModelDocExtension.GetObjectByPersistReference3`
- `IModelDocExtension.GetPersistReference3`
- `IModelDocExtension.GetPersistReferenceCount3`
- `IModelDocExtension.IGetObjectByPersistReference3`
- `IModelDocExtension.IGetPersistReference3`
- `ISldWorks.IsSame`