---
type: method
interface: IDrSection
member: ISetExcludedComponents
returns: System.Boolean
parameters:
  -
    name: Number
    type: System.Int32
    description: Number of components
  -
    name: LpComps
    type: Component
    description: in-process, unmanaged C++: Pointer to array of IComponent2 objects of size Number VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.EnumExcludedComponents2
  - IDrSection.GetExcludedComponents
  - IDrSection.SetExcludedComponents
keywords:
  - components
  - see
  - also
  - icomponent2
  - section
  - views
  - idrsection
  - isetexcludedcomponents
  - dr
  - excluded
  - number
  - int32
  - lp
  - comps
  - component
  - boolean
---

# IDrSection.ISetExcludedComponents

Excludes the specified components from this section view.

## Signature

```csharp
System.Boolean ISetExcludedComponents( 
   System.Int32
Number
,
   ref Component
LpComps
)
```
## Parameters

- `Number` (System.Int32): Number of components
- `LpComps` (Component): in-process, unmanaged C++: Pointer to array of IComponent2 objects of size Number VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the specified components are excluded, false if not

## Remarks

Call
IModelDoc2::EditRebuild3
after calling this method.

## See Also

- `IDrSection.EnumExcludedComponents2`
- `IDrSection.GetExcludedComponents`
- `IDrSection.SetExcludedComponents`