---
type: method
interface: IModelDocExtension
member: GetPersistReference3
returns: System.Object
parameters:
  -
    name: DispObj
    type: System.Object
    description: Object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.IGetPersistReference3
  - IModelDocExtension.IsSamePersistentID
  - IView.ReferencedConfigurationID
keywords:
  - persistent
  - reference
  - ids
  - objects
  - id
  - getpersistreference3
  - imodeldocextension
  - model
  - doc
  - extension
  - persist
  - reference3
  - disp
  - obj
  - object
  - check
  - faces
  - faults
  - vba
  - use
  - compare
  - selected
  - their
  - vb
  - net
---

# IModelDocExtension.GetPersistReference3

Gets the persistent reference ID for the specified object in this model document.

## Signature

```csharp
System.Object GetPersistReference3( 
   System.Object
DispObj
)
```
## Parameters

- `DispObj` (System.Object): Object

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
A persistent reference ID is related to a model. It is portable and can be saved within the model or in other places. Some persistent reference IDs are general to all models and can be instantiated from all models. Your application must handle persistent reference IDs and their relationships among models.
The internal representations of the return value array may change, possibly from rebuild to rebuild, or more likely, from one release of SOLIDWORKS to the next, but their usage in finding the correct entity will be consistent across rebuilds and SOLIDWORKS releases.
To compare the referenced entities, you could use the Visual Basic
Is
operator to find out if the entities are the same.
See
Persistent Reference IDs
for more information.

## Examples

- Check Faces for Faults (VBA) (Check_Faces_for_Faults_Example_VB.htm)
- Use Persistent Reference (VBA) (Use_Persistent_Reference_Example_VB.htm)
- Get Object's Persistent Reference ID (VBA) (Get_Object_s_Persistent_Reference_ID_Example_VB.htm)
- Get Object's Persistent Reference ID (C++) (Get_Object_s_Persistent_Reference_ID_Example_CPlusPlus_COM.htm)
- Compare Selected Objects and Their Persistent Reference IDs (C#) (Compare_Selected_Objects_and_Their_Persistent_Reference_IDs_Example_CSharp.htm)
- Compare Selected Objects and Their Persistent Reference IDs (VB.NET) (Compare_Selected_Objects_and_Their_Persistent_Reference_IDs_Example_VBNET.htm)
- Compare Selected Objects and Their Persistent Reference IDs (VBA) (Compare_Selected_Objects_and_Their_Persistent_Reference_IDs_Example_VB.htm)

## See Also

- `IModelDocExtension.IGetPersistReference3`
- `IModelDocExtension.IsSamePersistentID`
- `IView.ReferencedConfigurationID`