---
type: method
interface: IInstanceToVaryOptions
member: GetD1IncrementDimensions
returns: void
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
  - getd1incrementdimensions
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
  - void
---

# IInstanceToVaryOptions.GetD1IncrementDimensions

Gets the dimensions to increment in Direction 1.

## Signature

```csharp
void GetD1IncrementDimensions( 
   out System.Object
IncrementDimensions
,
   out System.Object
IncrementDimValues
)
```
## Parameters

- `IncrementDimensions` (System.Object): Array of dimensions to increment
- `IncrementDimValues` (System.Object): Array of dimension increments in Direction 1

## Return Value

Unknown.

## Examples

- IInstanceToVaryOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IInstanceToVaryOptions)