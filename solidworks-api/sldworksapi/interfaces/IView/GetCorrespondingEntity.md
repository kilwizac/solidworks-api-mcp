---
type: method
interface: IView
member: GetCorrespondingEntity
returns: System.Object
parameters:
  -
    name: Entity
    type: System.Object
    description: Dispatch pointer to a vertex , face , or edge entity in the part or assembly
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetCorresponding
keywords:
  - corresponding
  - entities
  - entity
  - see
  - also
  - ientity
  - getcorrespondingentity
  - iview
  - view
  - object
  - between
  - parts
  - drawing
  - views
  - vba
  - vb
  - net
---

# IView.GetCorrespondingEntity

Gets the entity in this drawing view that corresponds to the specified part or assembly entity.

## Signature

```csharp
System.Object GetCorrespondingEntity( 
   System.Object
Entity
)
```
## Parameters

- `Entity` (System.Object): Dispatch pointer to a vertex , face , or edge entity in the part or assembly

## Return Value

Corresponding entity in this drawing view; null or Nothing if none found

## Remarks

Use
IModelDocExtension::GetCorrespondingEntity2
to get the part entity that corresponds to a drawing view entity.

## Examples

- Get Corresponding Entities Between Parts and Drawing Views (VBA) (Get_Corresponding_Entities_Between_Parts_and_Views_Example_VB.htm)
- Get Corresponding Entities Between Parts and Drawing Views (VB.NET) (Get_Corresponding_Entities_Between_Parts_and_Views_Example_VBNET.htm)
- Get Corresponding Entities Between Parts and Drawing Views (C#) (Get_Corresponding_Entities_Between_Parts_and_Views_Example_CSharp.htm)

## See Also

- `IView.GetCorresponding`