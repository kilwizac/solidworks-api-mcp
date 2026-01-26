---
type: method
interface: IConfiguration
member: AddExplodeStep
returns: System.Object
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
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.DeleteExplodeStep
  - IConfiguration.GetExplodeStep
  - IConfiguration.GetNumberOfExplodeSteps
  - IConfiguration.IAddExplodeStep
  - IConfiguration.IGetExplodeStep
keywords:
  - addexplodestep
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
  - object
---

# IConfiguration.AddExplodeStep

Obsolete. Superseded by IConfiguration::AddExplodeStep2.

## Signature

```csharp
System.Object AddExplodeStep( 
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

This method is valid only if an explode view exists in the active configuration. To create an explode view, call
IAssemblyDoc::AutoExplode
or
IAssemblyDoc::CreateExplodedView
.
Before calling this method, you must select by mark both a direction along which to explode and a component to move. For example:
boolstatus = Model.Extension.SelectByID2('', 'EDGE', -0.011, 0.06, 0.084, True, 1, Nothing)
boolstatus = Model.Extension.SelectByID2('squarebolt1-1@Assem1', 'COMPONENT', 0, 0, 0, True, 2, Nothing, swSelectOptionDefault)

## See Also

- `IConfiguration.DeleteExplodeStep`
- `IConfiguration.GetExplodeStep`
- `IConfiguration.GetNumberOfExplodeSteps`
- `IConfiguration.IAddExplodeStep`
- `IConfiguration.IGetExplodeStep`