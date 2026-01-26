---
type: method
interface: IAssemblyDoc
member: CreateSmartComponent
returns: System.Boolean
parameters:
  -
    name: ComponentIn
    type: Component2
    description: IComponent2 to make smart
  -
    name: RelatedComponents
    type: System.Object
    description: Array of the components to associate with the Smart Component
  -
    name: RelatedFeatures
    type: System.Object
    description: Array of the features contained in the components to associate with the Smart Component
  -
    name: AutoSizeDiameter
    type: System.Boolean
    description: True to auto-size a cylindrical Smart Component that has multiple configurations, false to not
  -
    name: LpMateReference
    type: Entity
    description: Concentric mate reference between a cylindrical face or axis and a feature
  -
    name: BoundingValues
    type: System.Object
    description: Array of doubles specifying minimum and maximum diameter values with which each configuration is compatible
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.AddSmartComponent
  - IComponent2.GetSmartComponentData
  - IComponent2.IsSmartComponent
  - IComponent2.SetSmartComponentData
  - ISmartComponentFeatureData
keywords:
  - smart
  - components
  - assemblies
  - see
  - also
  - iassemblydoc
  - createsmartcomponent
  - assembly
  - doc
  - create
  - component
  - component2
  - related
  - object
  - features
  - auto
  - size
  - diameter
  - boolean
  - lp
  - mate
  - reference
  - entity
  - bounding
  - values
  - make
  - vba
---

# IAssemblyDoc.CreateSmartComponent

Creates a Smart Component.

## Signature

```csharp
System.Boolean CreateSmartComponent( 
   Component2
ComponentIn
,
   System.Object
RelatedComponents
,
   System.Object
RelatedFeatures
,
   System.Boolean
AutoSizeDiameter
,
   Entity
LpMateReference
,
   System.Object
BoundingValues
)
```
## Parameters

- `ComponentIn` (Component2): IComponent2 to make smart
- `RelatedComponents` (System.Object): Array of the components to associate with the Smart Component
- `RelatedFeatures` (System.Object): Array of the features contained in the components to associate with the Smart Component
- `AutoSizeDiameter` (System.Boolean): True to auto-size a cylindrical Smart Component that has multiple configurations, false to not
- `LpMateReference` (Entity): Concentric mate reference between a cylindrical face or axis and a feature
- `BoundingValues` (System.Object): Array of doubles specifying minimum and maximum diameter values with which each configuration is compatible

## Return Value

True if the Smart Component is created, false if not

## Remarks

For example, a component with these configurations:
TenInchDiameter
ThirteenInchDiameter
TwentyInchDiameter
might have a BoundingValues array of [
9,11,12,14,19,21], which specifies a +1 tolerance over each configuration parameter.

## Examples

- Make Smart Component (VBA) (Make_Smart_Component_Example_VB.htm)
- Make Smart Component With Mate (VBA) (Make_Smart_Component_with__Mate_Example_VB.htm)

## See Also

- `IAssemblyDoc.AddSmartComponent`
- `IComponent2.GetSmartComponentData`
- `IComponent2.IsSmartComponent`
- `IComponent2.SetSmartComponentData`
- `ISmartComponentFeatureData`