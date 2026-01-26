---
type: method
interface: IDrSection
member: SetExcludedComponents
returns: System.Boolean
parameters:
  -
    name: VComponents
    type: System.Object
    description: Array of components
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.EnumExcludedComponents2
  - IDrSection.GetExcludedComponents
  - IDrSection.ISetExcludedComponents
keywords:
  - components
  - see
  - also
  - icomponent2
  - section
  - views
  - idrsection
  - setexcludedcomponents
  - dr
  - excluded
  - object
  - boolean
---

# IDrSection.SetExcludedComponents

Excludes the specified components from this section view.

## Signature

```csharp
System.Boolean SetExcludedComponents( 
   System.Object
VComponents
)
```
## Parameters

- `VComponents` (System.Object): Array of components

## Return Value

True if the specified components are excluded, false if not

## See Also

- `IDrSection.EnumExcludedComponents2`
- `IDrSection.GetExcludedComponents`
- `IDrSection.ISetExcludedComponents`