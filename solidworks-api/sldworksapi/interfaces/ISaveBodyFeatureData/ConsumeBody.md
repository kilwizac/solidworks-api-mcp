---
type: property
interface: ISaveBodyFeatureData
member: ConsumeBody
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
  - geometry
related: []
keywords:
  - consumebody
  - isavebodyfeaturedata
  - save
  - body
  - feature
  - data
  - consume
  - boolean
readonly: null
---

# ISaveBodyFeatureData.ConsumeBody

Gets or sets whether to consume all bodies in the original part.

## Signature

```csharp
System.Boolean ConsumeBody {get; set;}
```
## Parameters

None.

## Return Value

See Remarks

## Remarks

For VBA, .NET:
True to consume all bodies in the original part, false to not.
For C++:
VARIANT_TRUE (-1) to consume all bodies in the original part, VARIANT_FALSE (0) to not.