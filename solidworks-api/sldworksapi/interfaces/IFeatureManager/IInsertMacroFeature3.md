---
type: method
interface: IFeatureManager
member: IInsertMacroFeature3
returns: Feature
parameters:
  -
    name: BaseName
    type: System.String
    description: Name of the base feature (see Remarks )
  -
    name: ProgId
    type: System.String
    description: Indicates callback object (see Remarks )
  -
    name: MacroMethods
    type: System.String
    description: Null; valid only for VBA
  -
    name: ParamCount
    type: System.Int32
    description: Number of parameters
  -
    name: ParamNames
    type: System.String
    description: Array of strings of the parameters of size ParamCount
  -
    name: ParamTypes
    type: System.Int32
    description: Array of the types of parameters of size paramCount as defined by swMacroFeatureParamType_e
  -
    name: ParamValues
    type: System.String
    description: Array of strings of the values of parameters of size ParamCount
  -
    name: DimCount
    type: System.Int32
    description: Number of dimensions
  -
    name: DimTypes
    type: System.Int32
    description: Array of the types of dimensions as defined by swDimensionType_e (see Remarks )
  -
    name: DimCountValues
    type: System.Double
    description: Array of doubles of the values of dimensions of size DimCount
  -
    name: BodyCount
    type: System.Int32
    description: Number of bodies to modify in the macro feature
  -
    name: EditBodies
    type: Body2
    description: Array of IBody2 objects to modify in the macro feature
  -
    name: IconCount
    type: System.Int32
    description: Number of icons
  -
    name: IconFiles
    type: System.String
    description: Array of strings of the file names for the icons (see Remarks )
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
  - IFeatureManager.InsertMacroFeature3
  - IMacroFeatureData
keywords:
  - com
  - feature
  - macro
  - see
  - also
  - imacrofeaturedata
  - ifeature
  - iinsertmacrofeature3
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
  - param
  - count
  - int32
  - names
  - types
  - values
  - dim
  - double
  - body
  - edit
  - bodies
  - body2
  - icon
  - files
  - options
---

# IFeatureManager.IInsertMacroFeature3

Inserts a macro feature in this model.

## Signature

```csharp
Feature IInsertMacroFeature3( 
   System.String
BaseName
,
   System.String
ProgId
,
   ref System.String
MacroMethods
,
   System.Int32
ParamCount
,
   ref System.String
ParamNames
,
   ref System.Int32
ParamTypes
,
   ref System.String
ParamValues
,
   System.Int32
DimCount
,
   ref System.Int32
DimTypes
,
   ref System.Double
DimCountValues
,
   System.Int32
BodyCount
,
   ref Body2
EditBodies
,
   System.Int32
IconCount
,
   ref System.String
IconFiles
,
   System.Int32
Options
)
```
## Parameters

- `BaseName` (System.String): Name of the base feature (see Remarks )
- `ProgId` (System.String): Indicates callback object (see Remarks )
- `MacroMethods` (System.String): Null; valid only for VBA
- `ParamCount` (System.Int32): Number of parameters
- `ParamNames` (System.String): Array of strings of the parameters of size ParamCount
- `ParamTypes` (System.Int32): Array of the types of parameters of size paramCount as defined by swMacroFeatureParamType_e
- `ParamValues` (System.String): Array of strings of the values of parameters of size ParamCount
- `DimCount` (System.Int32): Number of dimensions
- `DimTypes` (System.Int32): Array of the types of dimensions as defined by swDimensionType_e (see Remarks )
- `DimCountValues` (System.Double): Array of doubles of the values of dimensions of size DimCount
- `BodyCount` (System.Int32): Number of bodies to modify in the macro feature
- `EditBodies` (Body2): Array of IBody2 objects to modify in the macro feature
- `IconCount` (System.Int32): Number of icons
- `IconFiles` (System.String): Array of strings of the file names for the icons (see Remarks )
- `Options` (System.Int32): Placement of the macro feature in the FeatureManager design tree as defined by swMacroFeatureOptions_e (see Remarks )

## Return Value

Pointer to the IFeature object

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
COM callback methods
The name of the component that implements the COM callback methods. The object that is represented by ProgID must support the ISwComFeature interface.
InsertMacroFeature3 ("Sample", "Sample.MyFeature", _
Nothing, paramNames, paramTypes, _
paramValues, dimTypes, dimValues, _
editBodies, iconFiles, _
swMacroFeatureByDefault)
In the COM server, the Sample.Feature class is derived or supports the ISwComFeature interface. These methods support the macro feature's
rebuild
,
edit
, and
security
functions.
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

## See Also

- `IFeatureManager.InsertMacroFeature3`
- `IMacroFeatureData`