---
type: method
interface: IAdvancedSelectionCriteria
member: Select
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - selections
related: []
keywords:
  - select
  - iadvancedselectioncriteria
  - advanced
  - selection
  - criteria
  - boolean
---

# IAdvancedSelectionCriteria.Select

Selects the assembly components that satisfy the current advanced selection criteria.

## Signature

```csharp
System.Boolean Select()
```
## Parameters

None.

## Return Value

True if the components are selected, false if not

## Remarks

Call this method after either:
Loading
the criteria from a
*.xml
file or a
*.sqy
legacy file.
- or -
Adding
items to the advanced component selection criteria list.

## Examples

- IAdvancedSelectionCriteria (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedSelectionCriteria)