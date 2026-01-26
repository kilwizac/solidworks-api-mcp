---
type: method
interface: IDragOperator
member: IAddComponent
returns: System.Boolean
parameters:
  -
    name: PComp
    type: Component2
    description: 
  -
    name: AppendFlag
    type: System.Boolean
    description: 
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IDragOperator.AddComponent
keywords:
  - drag
  - see
  - also
  - idragoperator
  - components
  - iaddcomponent
  - operator
  - add
  - component
  - comp
  - component2
  - append
  - flag
  - boolean
---

# IDragOperator.IAddComponent

Adds a component to the list of components to drag. Overload List " --&gt;Syntax " --&gt;

## Signature

```csharp
System.Boolean IAddComponent( 
   Component2
PComp
,
   System.Boolean
AppendFlag
)
```
## Parameters

- `PComp` (Component2): 
- `AppendFlag` (System.Boolean): 

## Return Value

Unknown.

## Remarks

Components that are constrained via mates are not considered fixed.

## See Also

- `IDragOperator.AddComponent`