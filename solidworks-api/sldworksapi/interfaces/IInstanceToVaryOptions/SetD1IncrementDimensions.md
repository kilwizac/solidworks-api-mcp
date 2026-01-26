---
type: method
interface: IInstanceToVaryOptions
member: SetD1IncrementDimensions
returns: System.Boolean
parameters:
  -
    name: IncrementDimensions
    type: System.Object
    description: Array of dimensions to increment
  -
    name: IncrementDimValues
    type: System.Object
    description: Array of dimension increments in Direction 1
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related: []
keywords:
  - setd1incrementdimensions
  - iinstancetovaryoptions
  - instance
  - vary
  - options
  - d1
  - increment
  - dimensions
  - object
  - dim
  - values
  - boolean
---

# IInstanceToVaryOptions.SetD1IncrementDimensions

Sets the dimensions to increment in Direction 1.

## Signature

```csharp
System.Boolean SetD1IncrementDimensions( 
   System.Object
IncrementDimensions
,
   System.Object
IncrementDimValues
)
```
## Parameters

- `IncrementDimensions` (System.Object): Array of dimensions to increment
- `IncrementDimValues` (System.Object): Array of dimension increments in Direction 1

## Return Value

True if the dimensions are incremented successfully, false if not

## Examples

- IInstanceToVaryOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IInstanceToVaryOptions)