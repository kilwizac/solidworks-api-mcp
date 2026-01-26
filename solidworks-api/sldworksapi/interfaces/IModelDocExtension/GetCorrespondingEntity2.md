---
type: method
interface: IModelDocExtension
member: GetCorrespondingEntity2
returns: System.Object
parameters:
  -
    name: Entity
    type: System.Object
    description: Dispatch pointer to a vertex , face , or edge entity in this drawing view or assembly
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetCorresponding2
keywords:
  - corresponding
  - entities
  - entity
  - see
  - also
  - ientity
  - getcorrespondingentity2
  - imodeldocextension
  - model
  - doc
  - extension
  - entity2
  - object
  - between
  - parts
  - drawing
  - views
  - vba
  - vb
  - net
---

# IModelDocExtension.GetCorrespondingEntity2

Gets the entity in the underlying part or subassembly that corresponds to the specified entity in this assembly or drawing view.

## Signature

```csharp
System.Object GetCorrespondingEntity2( 
   System.Object
Entity
)
```
## Parameters

- `Entity` (System.Object): Dispatch pointer to a vertex , face , or edge entity in this drawing view or assembly

## Return Value

Corresponding entity in the underlying part or subassembly; null or Nothing if none found (see Remarks )

## Remarks

To get the assembly entity corresponding to a given component entity, use
IComponent2::GetCorrespondingEntity
.
To get the drawing view entity corresponding to a given part or assembly entity, use
IView::GetCorrespondingEntity
.

## Examples

- Get Corresponding Entities Between Parts and Drawing Views (VBA) (Get_Corresponding_Entities_Between_Parts_and_Views_Example_VB.htm)
- Get Corresponding Entities Between Parts and Drawing Views (VB.NET) (Get_Corresponding_Entities_Between_Parts_and_Views_Example_VBNET.htm)
- Get Corresponding Entities Between Parts and Drawing Views (C#) (Get_Corresponding_Entities_Between_Parts_and_Views_Example_CSharp.htm)

## See Also

- `IModelDocExtension.GetCorresponding2`