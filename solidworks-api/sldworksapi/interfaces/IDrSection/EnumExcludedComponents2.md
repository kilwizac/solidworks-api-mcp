---
type: method
interface: IDrSection
member: EnumExcludedComponents2
returns: EnumComponents2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.GetExcludedComponents
keywords:
  - components
  - see
  - also
  - icomponent2
  - section
  - views
  - idrsection
  - enumexcludedcomponents2
  - dr
  - excluded
  - components2
---

# IDrSection.EnumExcludedComponents2

Gets all of the assembly components that are excluded from this section view.

## Signature

```csharp
EnumComponents2 EnumExcludedComponents2()
```
## Parameters

None.

## Return Value

Pointer to the IEnumComponents2 object

## Remarks

The ability to exclude components applies only to assembly section views. This method returns NULL for section views of parts.

## See Also

- `IDrSection.GetExcludedComponents`