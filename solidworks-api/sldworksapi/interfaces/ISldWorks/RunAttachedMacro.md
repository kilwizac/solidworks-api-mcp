---
type: method
interface: ISldWorks
member: RunAttachedMacro
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Filename of macro to run (do not include a path)
  -
    name: ModuleName
    type: System.String
    description: Module of specified macro to run
  -
    name: ProcedureName
    type: System.String
    description: Procedure of specified macro to run
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.RunMacro2
keywords:
  - macros
  - run
  - design
  - binder
  - runattachedmacro
  - isldworks
  - sld
  - works
  - attached
  - macro
  - file
  - name
  - string
  - module
  - procedure
  - boolean
---

# ISldWorks.RunAttachedMacro

Runs the specified attached macro, module, and procedure.

## Signature

```csharp
System.Boolean RunAttachedMacro( 
   System.String
FileName
,
   System.String
ModuleName
,
   System.String
ProcedureName
)
```
## Parameters

- `FileName` (System.String): Filename of macro to run (do not include a path)
- `ModuleName` (System.String): Module of specified macro to run
- `ProcedureName` (System.String): Procedure of specified macro to run

## Return Value

True if macro runs, false if not

## Remarks

An example of an attached macro is a macro that is attached to the active document's Design Binder.

## See Also

- `ISldWorks.RunMacro2`