---
type: method
interface: IInstanceToVaryOptions
member: SetD2IncrementDimensions
returns: System.Boolean
parameters:
  -
    name: IncrementDimensions
    type: System.Object
    description: Array of dimensions to increment
  -
    name: IncrementDimValues
    type: System.Object
    description: Array of dimension increments in Direction 2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related: []
keywords:
  - setd2incrementdimensions
  - iinstancetovaryoptions
  - instance
  - vary
  - options
  - d2
  - increment
  - dimensions
  - object
  - dim
  - values
  - boolean
---

# IInstanceToVaryOptions.SetD2IncrementDimensions

Sets the dimensions to increment in Direction 2.

## Signature

```csharp
System.Boolean SetD2IncrementDimensions( 
   System.Object
IncrementDimensions
,
   System.Object
IncrementDimValues
)
```
## Parameters

- `IncrementDimensions` (System.Object): Array of dimensions to increment
- `IncrementDimValues` (System.Object): Array of dimension increments in Direction 2

## Return Value

True if the dimensions are incremented successfully, false if not