---
type: method
interface: IModelDocExtension
member: GetCorrespondingEntity
returns: System.Object
parameters:
  -
    name: Entity
    type: System.Object
    description: Dispatch pointer to a vertex , face , or edge entity
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - ui
related:
  - IComponent2.GetCorresponding
  - IComponent2.GetCorrespondingEntity
  - IComponent2.IGetCorrespondingEntity
keywords:
  - getcorrespondingentity
  - imodeldocextension
  - model
  - doc
  - extension
  - corresponding
  - entity
  - object
  - part
  - component
  - vba
  - open
  - assembly
---

# IModelDocExtension.GetCorrespondingEntity

Obsolete. Superseded by IModelDocExtension::GetCorrespondingEntity2.

## Signature

```csharp
System.Object GetCorrespondingEntity( 
   System.Object
Entity
)
```
## Parameters

- `Entity` (System.Object): Dispatch pointer to a vertex , face , or edge entity

## Return Value

Dispatch pointer to the corresponding entity in the context of the component

## Examples

- Get Part for Corresponding Component (VBA) (Get_Part_for_Corresponding_Component_Example_VB.htm)
- Open Part from Assembly (VBA) (Open_Part_from_Assembly_Example_VB.htm)

## See Also

- `IComponent2.GetCorresponding`
- `IComponent2.GetCorrespondingEntity`
- `IComponent2.IGetCorrespondingEntity`