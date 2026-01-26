---
type: method
interface: IDragOperator
member: AddDynamicClearance
returns: System.Int32
parameters:
  -
    name: Comp1
    type: System.Object
    description: First component of the clearance pair
  -
    name: Comp2
    type: System.Object
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
  - IDragOperator.DynamicClearanceEnabled
  - IDragOperator.IAddDynamicClearance
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - dynamic
  - clearance
  - components
  - icomponent2
  - adddynamicclearance
  - idragoperator
  - drag
  - operator
  - add
  - comp1
  - object
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

# IDragOperator.AddDynamicClearance

Adds a dynamic clearance detector.

## Signature

```csharp
System.Int32 AddDynamicClearance( 
   System.Object
Comp1
,
   System.Object
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

- `Comp1` (System.Object): First component of the clearance pair
- `Comp2` (System.Object): Second component of the clearance pair
- `Value` (System.Double): Minimum clearance distance
- `AppendFlag` (System.Boolean): True appends the component to the list, false overwrites the list
- `ShowDim` (System.Boolean): True displays a dynamic reference dimension of the minimum clearance distance

## Return Value

Newly added clearance pair

## See Also

- `IDragOperator.DynamicClearanceEnabled`
- `IDragOperator.IAddDynamicClearance`