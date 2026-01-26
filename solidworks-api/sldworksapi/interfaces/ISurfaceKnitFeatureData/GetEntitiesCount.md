---
type: method
interface: ISurfaceKnitFeatureData
member: GetEntitiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceKnitFeatureData.Entities
  - ISurfaceKnitFeatureData.ISetEntities
keywords:
  - getentitiescount
  - isurfaceknitfeaturedata
  - surface
  - knit
  - feature
  - data
  - entities
  - count
  - int32
  - vba
---

# ISurfaceKnitFeatureData.GetEntitiesCount

Gets the number of knit faces and surfaces for this Surface-Knit feature.

## Signature

```csharp
System.Int32 GetEntitiesCount()
```
## Parameters

None.

## Return Value

Number of knit entities

## Remarks

Call this method before calling
ISurfaceKnitFeatureData::IGetEntities
.
See
Accessing Selections that Define Features
for additional details.

## Examples

- Get Knit Surface (VBA) (Get_Knit_Surface_Data_Example_VB.htm)

## See Also

- `ISurfaceKnitFeatureData.Entities`
- `ISurfaceKnitFeatureData.ISetEntities`