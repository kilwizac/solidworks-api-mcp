---
type: property
interface: IGussetFeatureData
member: UseAngle
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - useangle
  - igussetfeaturedata
  - gusset
  - feature
  - data
  - use
  - angle
  - boolean
readonly: null
---

# IGussetFeatureData.UseAngle

Gets or sets whether an angle is used for specifying the dimensions of the polygonal profile for this gusset feature.

## Signature

```csharp
System.Boolean UseAngle {get; set;}
```
## Parameters

None.

## Return Value

True if an angle is used, false if not EndOLEPropertyRow

## Remarks

IGussetFeatureData::ProfileType
must be set to swGussetProfilePolygon.