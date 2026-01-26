---
type: method
interface: ISimulationForceFeatureData
member: LoadSplineData
returns: System.Boolean
parameters:
  -
    name: Value
    type: System.String
    description: File from which to load the spline data point values
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related: []
keywords:
  - loadsplinedata
  - isimulationforcefeaturedata
  - simulation
  - force
  - feature
  - data
  - load
  - spline
  - value
  - string
  - boolean
---

# ISimulationForceFeatureData.LoadSplineData

Loads the spline data from the specified file for this Force feature.

## Signature

```csharp
System.Boolean LoadSplineData( 
   System.String
Value
)
```
## Parameters

- `Value` (System.String): File from which to load the spline data point values

## Return Value

Unknown.

## Remarks

The file should contain one data point per line. The data point consists of two values:
Time
Value at that time
Use commas or spaces as separators between the values.