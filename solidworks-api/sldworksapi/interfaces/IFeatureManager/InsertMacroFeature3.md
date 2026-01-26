---
type: method
interface: IFeatureManager
member: InsertMacroFeature3
returns: Feature
parameters:
  -
    name: BaseName
    type: System.String
    description: Name of the base feature (see Remarks )
  -
    name: ProgId
    type: System.String
    description: COM or .NET callback object; empty string if VBA (see Remarks )
  -
    name: MacroMethods
    type: System.Object
    description: Array of strings of size 9 only for VBA; "" otherwise (see Remarks )
  -
    name: ParamNames
    type: System.Object
    description: Array of strings of the names of the parameters
  -
    name: ParamTypes
    type: System.Object
    description: Array of the types of parameters of size paramCount as defined by swMacroFeatureParamType_e
  -
    name: ParamValues
    type: System.Object
    description: Array of strings of the values of parameters
  -
    name: DimTypes
    type: System.Object
    description: Array of the types of dimensions as defined by swDimensionType_e (see Remarks )
  -
    name: DimValues
    type: System.Object
    description: Array of values of the dimensions
  -
    name: EditBodies
    type: System.Object
    description: Array of IBody2 objects to modify in the macro feature
  -
    name: IconFiles
    type: System.Object
    description: Array of strings of the files names for the icons (see Remarks )
  -
    name: Options
    type: System.Int32
    description: Placement of the macro feature in the FeatureManager design tree as defined by swMacroFeatureOptions_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.IInsertMacroFeature3
  - IMacroFeatureData
keywords:
  - com
  - feature
  - macro
  - see
  - also
  - imacrofeaturedata
  - ifeature
  - insertmacrofeature3
  - ifeaturemanager
  - manager
  - insert
  - feature3
  - base
  - name
  - string
  - prog
  - id
  - methods
  - object
  - param
  - names
  - types
  - values
  - dim
  - edit
  - bodies
  - icon
  - files
  - options
  - int32
  - create
  - subfeature
  - vba
  - multibody
  - vb
  - net
---

# IFeatureManager.InsertMacroFeature3

Inserts a macro feature in this model.

## Signature

```csharp
Feature InsertMacroFeature3( 
   System.String
BaseName
,
   System.String
ProgId
,
   System.Object
MacroMethods
,
   System.Object
ParamNames
,
   System.Object
ParamTypes
,
   System.Object
ParamValues
,
   System.Object
DimTypes
,
   System.Object
DimValues
,
   System.Object
EditBodies
,
   System.Object
IconFiles
,
   System.Int32
Options
)
```
## Parameters

- `BaseName` (System.String): Name of the base feature (see Remarks )
- `ProgId` (System.String): COM or .NET callback object; empty string if VBA (see Remarks )
- `MacroMethods` (System.Object): Array of strings of size 9 only for VBA; "" otherwise (see Remarks )
- `ParamNames` (System.Object): Array of strings of the names of the parameters
- `ParamTypes` (System.Object): Array of the types of parameters of size paramCount as defined by swMacroFeatureParamType_e
- `ParamValues` (System.Object): Array of strings of the values of parameters
- `DimTypes` (System.Object): Array of the types of dimensions as defined by swDimensionType_e (see Remarks )
- `DimValues` (System.Object): Array of values of the dimensions
- `EditBodies` (System.Object): Array of IBody2 objects to modify in the macro feature
- `IconFiles` (System.Object): Array of strings of the files names for the icons (see Remarks )
- `Options` (System.Int32): Placement of the macro feature in the FeatureManager design tree as defined by swMacroFeatureOptions_e (see Remarks )

## Return Value

IFeature

## Remarks

BaseName
The argument BaseName is serialized within the feature and cannot be changed.
You can find out the name of the base feature by using
IMacroFeatureData::GetBaseName
.
The BaseName argument is also used to generate the name of the feature when the feature is first created.
ProgId
If creating a macro feature using...
Then ProgId is...
COM callbacks
The name of the program ID for the component that implements the COM callback methods. The object that is represented by ProgID must support the
ISwComFeature
interface.
InsertMacroFeature3 ("Sample", "Sample.MyFeature", _
Nothing, paramNames, paramTypes, _
paramValues, dimTypes, dimValues, _
editBodies, iconFiles, _
swMacroFeatureByDefault)
In the COM server, the Sample.Feature class is derived from ISwComFeature and implements
rebuild
,
edit
, and
security
functions.
VBA
An empty string.
InsertMacroFeature3("Sample", "",...)
.NET add-in callbacks
The name of the class that implements the .NET callbacks and ISwComFeature.
InsertMacroFeature3("Sample", "
project_name.class_module
",...)
MacroMethods
The macroMethods argument is implemented for VBA only. The array of nine strings consists of the following values:
Filename - File executed during feature generation.
Module - Source module executed during feature generation.
Procedure - Source procedure executed during feature generation.
Filename - File executed after edit definition is selected.
Module - Source module executed after edit definition is selected.
Procedure - Source procedure executed after edit definition is selected.
Filename - File executed while querying security; optional, see the next paragraph.
Module - Source Module executed while querying security; optional, see the next paragraph.
Procedure - Source Procedure executed while querying security; optional, see the next paragraph.
Filename should be the full pathname to the macro file. If the procedure resides in the same macro file that calls IFeatureManager::InsertMacroFeature3, then a call to
ISldWorks::GetCurrentMacroPathName
provides all of the information necessary for the Filename.
IModelDoc2::ListAuxiliaryExternalFileReferences
returns an array containing the names of the features that include external references and an array containing the names of the external files for Filename elements 1, 4, and 7 in the array.
The list of:
features can contain duplicates, if the macro feature uses more than one procedure.
file names can contain duplicates if:
the procedures are implemented in the same macro file.
more than one instance of the same macro feature is present.
If a security procedure is not used, then Filename, Module, and Procedure must all be empty strings.
Procedure names must have an
swm
prefix in the name. This prefix identifies the procedures to execute.
DimTypes
Only these dimension types are supported by this method:
swAngularDimension
swLinearDimension
swRadialDimension
IconFiles
The array of the file names for the icons can contain either three or nine strings.
Number of strings in array
Types of images in this order
Image format and sizes
Three
Regular
Suppressed
Highlighted
Windows bitmap (
*.bmp
) format
16 pixels wide X 18 pixels high
Nine
NOTES:
This size array is only valid for macro features created in parts, assemblies, and drawings in SOLIDWORKS 2017 and later.
SOLIDWORKS displays the appropriate images based on the current DPI setting of the display device.
Regular small
Suppressed small
Highlighted small
Regular medium
Suppressed medium
Highlighted medium
Regular large
Suppressed large
Highlighted large
Windows bitmap (
*.bmp
) format
Recommended sizes are:
Small: 20 pixels wide X 20 pixels high
Medium: 32 pixels wide X 32 pixels high
Large: 40 pixels wide X 40 pixels high
You can specify either the full path name or just the file name for the strings; for example,
c:
\
bitmaps
\
icon1.bmp
or
icon1.bmp
.
Options
swMacroFeatureOptions_e.swMacroFeatureEmbedMacroFile is not supported by programming languages for the Microsoft .NET Framework; for example, not supported by C#, Visual Basic .NET, or Managed C++.
See
Overview of Macro Features
for more information.

## Examples

- Create Macro Feature Subfeature (VBA) (Create_Macro_Feature_Subfeature_Example_VB.htm)
- Create Multibody Macro Feature (VBA) (Create_Multibody_Macro_Feature_Example_VB.htm)
- Create Multibody Macro Feature (VB.NET) (Create_Multibody_Macro_Feature_Example_VBNET.htm)
- Create Multibody Macro Feature (C#) (Create_Multibody_Macro_Feature_Example_CSharp.htm)

## See Also

- `IFeatureManager.IInsertMacroFeature3`
- `IMacroFeatureData`