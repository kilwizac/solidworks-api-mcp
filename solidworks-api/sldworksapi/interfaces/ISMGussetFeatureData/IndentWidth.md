---
type: property
interface: ISMGussetFeatureData
member: IndentWidth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - indentwidth
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - indent
  - width
  - double
readonly: null
---

# ISMGussetFeatureData.IndentWidth

Gets or sets the indent width of this gusset.

## Signature

```csharp
System.Double IndentWidth {get; set;}
```
## Parameters

None.

## Return Value

Indent width

## Remarks

This property is valid only if
ISMGussetFeatureData::ProfileDimensionScheme
is set to 0.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)