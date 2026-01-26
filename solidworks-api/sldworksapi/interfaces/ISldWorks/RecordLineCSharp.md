---
type: method
interface: ISldWorks
member: RecordLineCSharp
returns: System.Boolean
parameters:
  -
    name: StringLine
    type: System.String
    description: Text to write to a C# macro and the SOLIDWORKS journal file
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - DSldWorksEvents_BeginRecordNotifyEventHandler
  - DSldWorksEvents_EndRecordNotifyEventHandler
  - ISldWorks.RunMacro2
keywords:
  - record
  - macros
  - recordlinecsharp
  - isldworks
  - sld
  - works
  - line
  - sharp
  - string
  - boolean
  - vba
  - vb
  - net
---

# ISldWorks.RecordLineCSharp

Adds a line of code to a C# macro and the SOLIDWORKS journal file.

## Signature

```csharp
System.Boolean RecordLineCSharp( 
   System.String
StringLine
)
```
## Parameters

- `StringLine` (System.String): Text to write to a C# macro and the SOLIDWORKS journal file

## Return Value

True if successful, false if not

## Remarks

This method is useful if you want your add-in application to record and play back SOLIDWORKS macros or write to the SOLIDWORKS journal file.
For example, if your add-in application allows end users to change the material specifications associated with a model, then end users may want to be able to record and play back the operation in a macro. This might allow them to easily assign material specifications to a large number of files by playing back the macro.
Text is only written to macros if macro recording is enabled when the method is called (
ISldWorks::Run Command
swCommands_RecordPauseMacro ""). Users are prompted to select the type of macros to create when recording is stopped (ISldWorks::Run Command swCommands_StopMacro "").
For your add-in functionality to be recorded reliably in all macro formats, you should call all three macro-recording methods:
ISldWorks::RecordLine
to record to a
SW VBA Macro (*.swp)
.
ISldWorks::RecordLineVBnet
to record to a
SW VSTA VB Macro (*.vbproj)
.
ISldWorks::RecordLineCSharp to record to a
SW VSTA C# Macro (*.csproj)
.
Exercise caution when recording lines that include string literals. String literals are parsed when the add-in application is compiled and again when the macro is compiled.

## Examples

- Record Macros (VBA) (Record_Macros_Example_VB.htm)
- Record Macros (VB.NET) (Record_Macros_Example_VBNET.htm)
- Record Macros (C#) (Record_Macros_Example_CSharp.htm)

## See Also

- `DSldWorksEvents_BeginRecordNotifyEventHandler`
- `DSldWorksEvents_EndRecordNotifyEventHandler`
- `ISldWorks.RunMacro2`