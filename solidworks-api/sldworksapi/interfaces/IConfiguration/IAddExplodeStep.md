---
type: method
interface: IConfiguration
member: IAddExplodeStep
returns: ExplodeStep
parameters:
  -
    name: ExplDist
    type: System.Double
    description: Explode distance
  -
    name: ReverseDir
    type: System.Boolean
    description: True to reverse the direction of the explode step, false to not
  -
    name: RigidSubassembly
    type: System.Boolean
    description: True to explode entire sub assembly, false to explode just the selected component
  -
    name: ExplodeRelated
    type: System.Boolean
    description: True to explode related components together, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.AddExplodeStep
  - IConfiguration.DeleteExplodeStep
  - IConfiguration.GetExplodeStep
  - IConfiguration.GetNumberOfExplodeSteps
  - IConfiguration.IGetExplodeStep
keywords:
  - iaddexplodestep
  - iconfiguration
  - configuration
  - add
  - explode
  - step
  - expl
  - dist
  - double
  - reverse
  - dir
  - boolean
  - rigid
  - subassembly
  - related
---

# IConfiguration.IAddExplodeStep

Adds a new explode step to the configuration.

## Signature

```csharp
ExplodeStep IAddExplodeStep( 
   System.Double
ExplDist
,
   System.Boolean
ReverseDir
,
   System.Boolean
RigidSubassembly
,
   System.Boolean
ExplodeRelated
)
```
## Parameters

- `ExplDist` (System.Double): Explode distance
- `ReverseDir` (System.Boolean): True to reverse the direction of the explode step, false to not
- `RigidSubassembly` (System.Boolean): True to explode entire sub assembly, false to explode just the selected component
- `ExplodeRelated` (System.Boolean): True to explode related components together, false to not

## Return Value

Pointer to a newly created explode step

## Remarks

Before calling this method, you must select by mark both an edge direction to explode along and a component to move. For example:
boolstatus = Model.Extension.SelectByID2('', 'EDGE', -0.011, 0.06, 0.084, True, 1, Nothing)
boolstatus = Model.Extension.SelectByID2('squarebolt1-1@Assem1', 'COMPONENT', 0, 0, 0, True, 2, Nothing, swSelectOptionDefault)

## See Also

- `IConfiguration.AddExplodeStep`
- `IConfiguration.DeleteExplodeStep`
- `IConfiguration.GetExplodeStep`
- `IConfiguration.GetNumberOfExplodeSteps`
- `IConfiguration.IGetExplodeStep`