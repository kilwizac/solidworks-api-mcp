---
type: method
interface: IEntity
member: GetComponent
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAttribute.GetEntity
  - IAttribute.GetEntityState
  - IComponent2.GetCorrespondingEntity
  - IEntity.GetSafeEntity
  - IEntity.IGetComponent2
  - IFaultEntity.Entity
  - IModelDocExtension.GetCorrespondingEntity
  - IPartDoc.GetEntityByName
  - IPartDoc.GetNamedEntities
  - IView.GetVisibleEntities
keywords:
  - getcomponent
  - ientity
  - entity
  - component
  - object
  - selected
  - vba
  - feature
  - via
  - display
  - dimension
  - bom
  - balloon
  - properties
  - vb
  - net
---

# IEntity.GetComponent

Gets the owning component for this entity.

## Signature

```csharp
System.Object GetComponent()
```
## Parameters

None.

## Return Value

Component that owns this entity

## Remarks

You can use
ISelectionMgr::GetSelectedObject6
to get the selected object in the assembly, then use the entity object representing that face or edge object to call this method.
This method works only when you get the
IEntity
object directly from the assembly document or from an assembly entity that is displayed in a drawing document.

## Examples

- Get Component for Selected Entity (VBA) (Get_Component_for_Selected_Entity_Example_VB.htm)
- Get Component from Feature (VBA) (Get_Component_from_Feature_Example_VB.htm)
- Get Component Via Display Dimension (VBA) (Get_Component_Via_Display_Dimension_Example_VB.htm)
- Get BOM Balloon Properties (C#) (Get_BOM_Balloon_Properties_Example_CSharp.htm)
- Get BOM Balloon Properties (VB.NET) (Get_BOM_Balloon_Properties_Example_VBNET.htm)
- Get BOM Balloon Properties (VBA) (Get_BOM_Balloon_Properties_Example_VB.htm)

## See Also

- `IAttribute.GetEntity`
- `IAttribute.GetEntityState`
- `IComponent2.GetCorrespondingEntity`
- `IEntity.GetSafeEntity`
- `IEntity.IGetComponent2`
- `IFaultEntity.Entity`
- `IModelDocExtension.GetCorrespondingEntity`
- `IPartDoc.GetEntityByName`
- `IPartDoc.GetNamedEntities`
- `IView.GetVisibleEntities`