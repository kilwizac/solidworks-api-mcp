---
type: property
interface: IDrSection
member: ExcludeFasteners
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - fasteners
  - excludefasteners
  - dr
  - exclude
  - boolean
readonly: null
---

# IDrSection.ExcludeFasteners

Gets or sets whether to exclude fasteners in the section view.

## Signature

```csharp
System.Boolean ExcludeFasteners {get; set;}
```
## Parameters

None.

## Return Value

True to exclude fasteners, false to include them

## Remarks

Call
IModelDoc2::EditRebuild3
after calling this property.