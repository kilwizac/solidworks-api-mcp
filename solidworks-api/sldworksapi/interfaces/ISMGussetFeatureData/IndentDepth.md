---
type: property
interface: ISMGussetFeatureData
member: IndentDepth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - indentdepth
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - indent
  - depth
  - double
readonly: null
---

# ISMGussetFeatureData.IndentDepth

Gets or sets the indent depth of this gusset.

## Signature

```csharp
System.Double IndentDepth {get; set;}
```
## Parameters

None.

## Return Value

Indent depth

## Remarks

This property is valid only if
ISMGussetFeatureData::ProfileDimensionScheme
is set to 0.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)