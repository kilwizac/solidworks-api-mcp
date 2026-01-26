---
type: property
interface: IManipulator
member: Options
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - options
  - imanipulator
  - manipulator
  - int32
readonly: null
---

# IManipulator.Options

Gets or sets whether the manipulator is deleted when a component in an assembly is modified or deleted.

## Signature

```csharp
System.Int32 Options {get; set;}
```
## Parameters

None.

## Return Value

Option as defined in swManipulatorOptions_e (see Remarks )

## Remarks

SOLIDWORKS recommends setting this property to swManipulatorOpts_KeepAfterComponentModify when working in an assembly.