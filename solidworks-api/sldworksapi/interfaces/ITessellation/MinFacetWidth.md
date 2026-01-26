---
type: property
interface: ITessellation
member: MinFacetWidth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ITessellation.MaxFacetWidth
keywords:
  - minfacetwidth
  - itessellation
  - tessellation
  - min
  - facet
  - width
  - double
readonly: null
---

# ITessellation.MinFacetWidth

Gets or sets the minimum facet width for this tessellation.

## Signature

```csharp
System.Double MinFacetWidth {get; set;}
```
## Parameters

None.

## Return Value

Minimum tessellation width

## Remarks

The default value for the underlying modeler is used when tessellating.

## See Also

- `ITessellation.MaxFacetWidth`