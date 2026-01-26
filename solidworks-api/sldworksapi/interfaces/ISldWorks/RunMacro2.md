---
type: method
interface: ISldWorks
member: RunMacro2
returns: System.Boolean
parameters:
  -
    name: FilePathName
    type: System.String
    description: Path and filename of the project file containing the macro
  -
    name: ModuleName
    type: System.String
    description: Name of the module in the macro
  -
    name: ProcedureName
    type: System.String
    description: Name of the procedure in the module
  -
    name: Options
    type: System.Int32
    description: Option as defined swRunMacroOption_e (supports VBA macros only)
  -
    name: Error
    type: System.Int32
    description: Error as defined by swRunMacroError_e (supports VBA macros only)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetCurrentMacroPathFolder
  - ISldWorks.GetCurrentMacroPathName
  - ISldWorks.GetMacroMethods
  - ISldWorks.RecordLine
  - ISldWorks.RecordLineCSharp
  - ISldWorks.RecordLineVBnet
  - ISldWorks.RunAttachedMacro
keywords:
  - macros
  - run
  - runmacro2
  - isldworks
  - sld
  - works
  - macro2
  - file
  - path
  - name
  - string
  - module
  - procedure
  - options
  - int32
  - error
  - boolean
---

# ISldWorks.RunMacro2

Runs a macro from a project file.

## Signature

```csharp
System.Boolean RunMacro2( 
   System.String
FilePathName
,
   System.String
ModuleName
,
   System.String
ProcedureName
,
   System.Int32
Options
,
   out System.Int32
Error
)
```
## Parameters

- `FilePathName` (System.String): Path and filename of the project file containing the macro
- `ModuleName` (System.String): Name of the module in the macro
- `ProcedureName` (System.String): Name of the procedure in the module
- `Options` (System.Int32): Option as defined swRunMacroOption_e (supports VBA macros only)
- `Error` (System.Int32): Error as defined by swRunMacroError_e (supports VBA macros only)

## Return Value

True if macro runs, false if not

## Remarks

If you specify swRunMacroUnloadAfterRun for Options, then the macro is unloaded from the VBA IDE after running.
Use the path and filename of the compiled DLL for the FilePathName argument for a .NET macro. By default, the procedure is called
Main
in a C# macro. Because C# is case sensitive, you must specify
Main
for ProcedureName in this method.. See
Running a C# DLL from VBA
in the
Example
section.
Running a macro from an add-in application, standalone .
exe
, or VBA macro is supported. Running a .NET macro from a .NET macro is also supported, but only if both .NET macros were created using the same VSTA version.
See
SOLIDWORKS Macros
for details.

## See Also

- `ISldWorks.GetCurrentMacroPathFolder`
- `ISldWorks.GetCurrentMacroPathName`
- `ISldWorks.GetMacroMethods`
- `ISldWorks.RecordLine`
- `ISldWorks.RecordLineCSharp`
- `ISldWorks.RecordLineVBnet`
- `ISldWorks.RunAttachedMacro`