---
type: method
interface: IAssemblyDoc
member: AutoMateRepair
returns: System.Int32
parameters:
  -
    name: ProcessedMates
    type: System.Object
    description: Array of successfully repaired IMate2 s
  -
    name: FailedMates
    type: System.Object
    description: Array of failed IMate2s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.CreateMate
keywords:
  - automaterepair
  - iassemblydoc
  - assembly
  - doc
  - auto
  - mate
  - repair
  - processed
  - mates
  - object
  - failed
  - int32
---

# IAssemblyDoc.AutoMateRepair

Automatically repairs broken mates in this assembly.

## Signature

```csharp
System.Int32 AutoMateRepair( 
   out System.Object
ProcessedMates
,
   out System.Object
FailedMates
)
```
## Parameters

- `ProcessedMates` (System.Object): Array of successfully repaired IMate2 s
- `FailedMates` (System.Object): Array of failed IMate2s

## Return Value

Mate repair errors as defined by swAutoMateRepairErrors_e

## Remarks

Before calling this method you must:
ensure that the entities needed to repair the broken mates are present in the assembly
- and -
select the Mates folder in the FeatureManager design tree.

## See Also

- `IAssemblyDoc.CreateMate`