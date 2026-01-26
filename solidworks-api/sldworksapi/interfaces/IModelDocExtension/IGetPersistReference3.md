---
type: method
interface: IModelDocExtension
member: IGetPersistReference3
returns: System.Byte
parameters:
  -
    name: DipsObj
    type: System.Object
    description: Object
  -
    name: Count
    type: System.Int32
    description: Size of returned array assigned to that object (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.IsSamePersistentID
keywords:
  - persistent
  - reference
  - ids
  - objects
  - id
  - igetpersistreference3
  - imodeldocextension
  - model
  - doc
  - extension
  - persist
  - reference3
  - dips
  - obj
  - object
  - count
  - int32
  - byte
---

# IModelDocExtension.IGetPersistReference3

Gets the persistent reference ID for the specified object in this model document.

## Signature

```csharp
System.byte IGetPersistReference3( 
   System.Object
DipsObj
,
   System.Int32
Count
)
```
## Parameters

- `DipsObj` (System.Object): Object
- `Count` (System.Int32): Size of returned array assigned to that object (see Remarks )

## Return Value

Array containing the persistent reference ID assigned to that object

## Remarks

Persistent reference ID values obtained using the now obsolete IModelDocExtension::GetPersistReference and its related obsolete methods, IModelDocExtension::GetPersistReferenceCount and IModelDocExtension::GetObjectByPersistReference2, are not compatible with persistent reference IDs obtained using this method and its related methods,
IModelDocExtension::GetPersistReferenceCount3
and
IModelDocExtension::GetObjectByPersistReference3
or
IModelDocExtension::IGetObjectByPersistReference3
.
IMPORTANT:
SOLIDWORKS recommends not using IModelDocExtension::IGetPersistReference3 with ModelDocExtension::GetPersistReferenceCount3 because when ModelDocExtension::GetPersistReferenceCount3 is used with ModelDocExtension::IGetPersistReference3, you will experience a significant decrease in performance. Instead, use
IModelDocExtension::GetPersistReference3
.
A persistent reference ID is related to a model. It is portable and can be saved within the model or in other places. Some persistent reference IDs are general to all models and can be instantiated from all models. Your application must handle persistent reference IDs and their relationships among models.
The internal representations of the return value array may change, possibly from rebuild to rebuild, or more likely, from one release of SOLIDWORKS to the next, but their usage in finding the correct entity will be consistent across rebuilds and SOLIDWORKS releases.
To compare the referenced entities, you could use the Visual Basic
Is
operator to find out if the entities are the same.
See
Persistent Reference IDs
for more information.

## Examples

- Get Object's Persistent Reference ID (C++) (Get_Object_s_Persistent_Reference_ID_Example_CPlusPlus_COM.htm)

## See Also

- `IModelDocExtension.IsSamePersistentID`