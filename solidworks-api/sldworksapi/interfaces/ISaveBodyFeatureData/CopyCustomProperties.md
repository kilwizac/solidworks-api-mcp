---
type: property
interface: ISaveBodyFeatureData
member: CopyCustomProperties
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
  - copycustomproperties
  - isavebodyfeaturedata
  - save
  - body
  - feature
  - data
  - copy
  - custom
  - properties
  - boolean
readonly: null
---

# ISaveBodyFeatureData.CopyCustomProperties

Gets or sets whether to copy custom properties to the new parts.

## Signature

```csharp
System.Boolean CopyCustomProperties {get; set;}
```
## Parameters

None.

## Return Value

See Remarks

## Remarks

For VBA, .NET:
True to copy custom properties to the new parts, false to not.
For C++:
VARIANT_TRUE (-1) to copy custom properties to the new parts, VARIANT_FALSE (0) to not.