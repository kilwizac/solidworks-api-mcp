---
type: method
interface: IDragOperator
member: IAddDynamicClearance
returns: System.Int32
parameters:
  -
    name: Comp1
    type: Component2
    description: First component of the clearance pair
  -
    name: Comp2
    type: Component2
    description: Second component of the clearance pair
  -
    name: Value
    type: System.Double
    description: Minimum clearance distance
  -
    name: AppendFlag
    type: System.Boolean
    description: True appends the component to the list, false overwrites the list
  -
    name: ShowDim
    type: System.Boolean
    description: True displays a dynamic reference dimension of the minimum clearance distance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IDragOperator.AddDynamicClearance
  - IDragOperator.DynamicClearanceEnabled
keywords:
  - dynamic
  - clearance
  - components
  - see
  - also
  - icomponent2
  - assemblies
  - iassemblydoc
  - iadddynamicclearance
  - idragoperator
  - drag
  - operator
  - add
  - comp1
  - component2
  - comp2
  - value
  - double
  - append
  - flag
  - boolean
  - show
  - dim
  - int32
---

# IDragOperator.IAddDynamicClearance

Adds a dynamic clearance detector.

## Signature

```csharp
System.Int32 IAddDynamicClearance( 
   Component2
Comp1
,
   Component2
Comp2
,
   System.Double
Value
,
   System.Boolean
AppendFlag
,
   System.Boolean
ShowDim
)
```
## Parameters

- `Comp1` (Component2): First component of the clearance pair
- `Comp2` (Component2): Second component of the clearance pair
- `Value` (System.Double): Minimum clearance distance
- `AppendFlag` (System.Boolean): True appends the component to the list, false overwrites the list
- `ShowDim` (System.Boolean): True displays a dynamic reference dimension of the minimum clearance distance

## Return Value

Newly added clearance pair

## See Also

- `IDragOperator.AddDynamicClearance`
- `IDragOperator.DynamicClearanceEnabled`