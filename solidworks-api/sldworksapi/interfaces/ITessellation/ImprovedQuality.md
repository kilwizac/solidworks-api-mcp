---
type: property
interface: ITessellation
member: ImprovedQuality
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - improvedquality
  - itessellation
  - tessellation
  - improved
  - quality
  - boolean
  - tessellate
  - body
  - vb
  - net
  - vba
readonly: null
---

# ITessellation.ImprovedQuality

Gets or sets whether to return higher-quality data.

## Signature

```csharp
System.Boolean ImprovedQuality {get; set;}
```
## Parameters

None.

## Return Value

True to return higher-quality tessellation analysis data; false to return tessellation rendering data

## Remarks

If this property is not set, tessellation rendering data is returned by default.

## Examples

- Tessellate a Body (C#) (Tessellate_a_Body_Example_CSharp.htm)
- Tessellate a Body (VB.NET) (Tessellate_a_Body_Example_VBNET.htm)
- Tessellate a Body (VBA) (Tessellate_a_Body_Example_VB.htm)